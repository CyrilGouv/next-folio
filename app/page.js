import Hero from "@/components/Blocks/Hero/Hero";
import styles from "./page.module.css";


export default function Home() {

  const page = "homepage"

  return (
    <>
      <Hero page={ page } />
    </>
  );
}
