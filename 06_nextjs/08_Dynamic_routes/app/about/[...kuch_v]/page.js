export default async function Page({ params }) {

    const par = await params

    console.log(par)

    return <div>I am about page check console</div>
}