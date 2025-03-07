import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const ProjectImages = () => {
    const cld = new Cloudinary({
        cloud: { cloudName: "dq70ltuo8" },
    });

    const myImage = cld.image("qijobpdiwngoj1lb2rh8").resize(fill().width(500));

    return <AdvancedImage cldImg={myImage} />;
};

export default ProjectImages;
