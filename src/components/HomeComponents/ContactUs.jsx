import { BsChevronDoubleDown, BsTelephone, BsClock, BsCalendarDate } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import GoogleMapReact from 'google-map-react';
import { googleAPIkey } from '../../googleAPIKey';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactUs = () => {
    const defaultProps = {
        center: {
            lat: 23.80041,
            lng: 90.4152
        },
        zoom: 12
    };
    return (
        <div>

            <div className='my-4 md:my-10 text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Contact Us</h1>
                <BsChevronDoubleDown className="text-red-600 text-xl md:text-3xl w-full mx-auto my-2"></BsChevronDoubleDown>
                <p className='uppercase text-gray-500'>Happy Clients About us</p>
            </div>
            <div className='max-w-4xl mx-auto  my-10 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                    <div className='w-52 flex gap-2'>
                        <CiLocationOn className=" lg:text-5xl  text-xl md:text-3xl text-red-600"></CiLocationOn>
                        <div>
                            <h4 className="text-2xl">Postal Address</h4>
                            <p className='w-40 font-semibold text-gray-500'>Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                        </div>
                    </div>
                    <div className='flex w-52 gap-2'>
                        <BsTelephone className="lg:text-5xl text-xl md:text-3xl text-red-600"></BsTelephone>
                        <div>
                            <h4 className="text-2xl">Phone & E-mail</h4>
                            <p className='w-40 font-semibold text-gray-500'>Phone: 1-800-64-38
                                Fax: 1-800-64-39
                                info@ancorathemes.com</p>
                        </div>
                    </div>
                    <div className='flex w-52 gap-2'>
                        <BsClock className="lg:text-5xl text-xl md:text-3xl text-red-600"></BsClock>
                        <div>
                            <h4 className="text-2xl">Open Hours</h4>
                            <p className='w-40 font-semibold text-gray-500'>Monday – Friday 8.00 am – 5.00 pm, Weekend Closed</p>
                        </div>
                    </div>
                    <div className='flex w-52 gap-2'>
                        <BsCalendarDate className="text-xl md:text-3xl lg:text-5xl text-red-600"></BsCalendarDate>
                        <div>
                            <h4 className="text-2xl">Sessions</h4>
                            <p className='w-40 font-semibold text-gray-500'>Mornings:8 am – 12 am, Afternoons: 1 pm – 5pm, Full Day: 8 am – 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ height: '500px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: googleAPIkey }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>

            </div>

        </div>

    );
};

ContactUs.propTypes = {
    text: PropTypes.element
};

export default ContactUs