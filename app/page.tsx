import Home from "./layouts/home";
import About from "./layouts/home/about";
import Featured from "./layouts/home/featured";
import Summaries from "./layouts/home/summaries";
import Tools from "./layouts/home/tools";
import Achievement from "./layouts/home/achievement";

export default function page() {


  return (
    <div className="container mx-auto flex flex-col gap-20">
      <Home
        greeting="Hello, I`m"
        name="Ibnu Batutah"
        image="./image/profile/profile.jpeg"
        passion={["Mobile Developer", "iOS Developer", "Android Developer", "Backend Developer"]}
        description="I'm a Mobile Developer who loves solving complex problems and building scalable, long-lasting systems. Passionate about AI and currently learning AI development."
        sm={[
          {
            icon: "mdi:github",
            link: "https://github.com/ibnu009",
          },
          {
            icon: "mdi:linkedin",
            link: "https://www.linkedin.com/in/ibnu-batutah/",
          },
          {
            icon: "mdi:gmail",
            link: "mailto:ibnubatutah001@gmail.com",
          },
          //Instagram
          {
            icon: "mdi:instagram",
            link: "https://www.instagram.com/itsibnubatutah/",
          },
          //Youtube
          {
            icon: "mdi:youtube",
            link: "https://www.youtube.com/@itsibnubatutah",
          },
          //Tiktok
          {
            icon: "simple-icons:tiktok",
            link: "https://www.tiktok.com/@itsibnubatutah",
          },
          
        ]}
      />
      <About />
      {/*<Summaries />*/}
      <Featured />
      <Achievement />
      <Tools />
    </div>
  );
}
