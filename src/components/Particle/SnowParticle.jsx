import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const SnowParticle = () => {

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    }

    const particlesLoaded = (container) => {
        console.log(container);
    }

    const optionsSnow = {
        "fullScreen": {
            "enable": false,
        },
        "fpsLimit": 120,
        "particles": {
            "color": {
                "value": "#fff"
            },
            "move": {
                "direction": "bottom",
                "enable": true,
                "outModes": "out",
                "speed": 0
            },
            "number": {
                "density": {
                    "enable": true,
                    "area": 1500
                },
                "value": 400
            },
            "opacity": {
                "value": 0.7
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "value": 3
            },
            "wobble": {
                "enable": true,
                "distance": 10,
                "speed": 10
            },
            "zIndex": {
                "value": {
                    "min": 0,
                    "max": 100
                }
            }
        }
    }

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: 2,
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={optionsSnow}
            />
        </div>
    );
};

export default SnowParticle;