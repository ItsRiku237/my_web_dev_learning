import Image from "next/image";

// link image :https://nextjs.org/docs/app/api-reference/components/image
// link hostconfig: https://nextjs.org/docs/messages/next-image-unconfigured-host

export default function Home() {
  return (
  <div className="container my-5">
    <img className="mx-auto" src="https://wowslider.com/sliders/demo-44/data1/images/quay.jpg" alt="" />

    <div className="img size-80 relative bg-red-400">
    {/* <Image className="mx-auto" width={100} height={100} src="https://wowslider.com/sliders/demo-44/data1/images/quay.jpg" alt="" /> */}
    <Image className="mx-auto object-contain" fill={true} src="https://wowslider.com/sliders/demo-44/data1/images/quay.jpg" alt="" />
    </div>
  </div>
  );
}
