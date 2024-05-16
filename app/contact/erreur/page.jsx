import Hero from "@/components/Blocks/Hero/Hero"


const page = () => {

    const page = "error"

    return (
        <>
            <Hero page={ page } withText={ true } className="hero__full" />
        </>
    ) 
}

export default page