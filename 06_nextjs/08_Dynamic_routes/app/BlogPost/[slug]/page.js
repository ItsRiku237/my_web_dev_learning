import { notFound } from "next/navigation";

// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes

export default async function Page({ params }) {

    const langauge = ["python" , "java" , "cpp" ,"c" ,"javascript"]
    const { slug } = await params;
    // const slug = (await params).slug;

    if (langauge.includes(slug)) {
        return <div>My Post : {slug}</div>
    }
    else{
        return notFound()
    }
}