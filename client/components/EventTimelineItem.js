import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const EventTimelineItem = ({ event }) => {
    return (
        <>
            <div className='etmln_timeline_item'>
                <div className='etmln_timeline_item_content'>
                    <div className='etmln_txt_info'>
                        <span className='etmln_event_name'>{event.name}</span>
                        <span className='etmln_event_date'>{event.date}</span>
                        <span className='etmln_event_discription'>{event.discription}</span>
                        <span className='etmln_timeline_dot'></span>
                    </div>
                    <div className="etmln_img_slider">
                        <Carousel renderThumbs={() => { }}>
                            {event.images.map((img, idx) => {
                                return (<div className="etmln-img-container" key={{idx}}>
                                    <img className="etmln-img" src={img}></img>
                                </div>);
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventTimelineItem;