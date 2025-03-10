import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface Props {
    img_id: string;
}

function ProjectImages({ img_id }: Props) {
    const cld = new Cloudinary({
        cloud: { cloudName: "dq70ltuo8" },
    });

    const myImage = cld.image(img_id).resize(fill().width(100));

    return <AdvancedImage cldImg={myImage} />;
}

export default ProjectImages;
