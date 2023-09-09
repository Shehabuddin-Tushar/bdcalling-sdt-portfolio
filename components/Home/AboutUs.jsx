const teamMembers = [
  {
    id: 1,
    name: "Md.Babul mridha",
    image: "https://i.postimg.cc/Z52k3KRK/babulsir.jpg",
    position: "Consultant",
  },
  {
    id: 2,
    name: "shiku",
    image: "https://i.postimg.cc/dt4cQcTn/siku.jpg",
    position: "Team leader",
  },
  {
    id: 3,
    name: "Md.Shehabuddin Tushar",
    image:
      "https://i.postimg.cc/hGxC8W4R/IMG-20230317-235932-340-2-removebg-preview-1.jpg",
    position: "Fullstack-Developer",
  },
  {
    id: 4,
    name: "Towhid",
    image: "https://i.postimg.cc/KjcfYV6h/towhid.png",
    position: "Backend-Developer",
  },
  {
    id: 5,
    name: "Farvez",
    image: "https://i.postimg.cc/fRHV4PK0/farvej.png",
    position: "Backend-Developer",
  },
  {
    id: 6,
    name: "Rabby",
    image: "https://i.postimg.cc/MTWDdHW8/rabby.png",
    position: "UI/UX Designer",
  },
  {
    id: 7,
    name: "Amrin",
    image: "https://i.postimg.cc/TPj0Vgv9/amrin.png",
    position: "UI/UX Designer",
  },
  {
    id: 8,
    name: "Mirza",
    image: "https://i.postimg.cc/KzJ5Vbz3/mirja.png",
    position: "App Developer",
  },
];

function AboutUs() {
  return (
    <div id="about">
      <div className="container py-10">
        <h1
          data-aos="fade-right"
          className="text-[40px] text-center md:text-left md:text-[56px] font-semibold"
        >
          Team members
        </h1>
        <p className="text-sm text-center md:text-left">
          Bdcalling-SDT Software's diverse professionals have been driving innovation
          and success since 2011. Discover our story and let our expertise speak
          for itself
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 place-items-center">
          {teamMembers.map((member) => (
            <div className="flex flex-col items-center py-2">
              <img
                className="border-dashed  border-[1px] border-primary rounded-full h-60 w-60 p-1"
                src={member.image}
                alt=""
              />
              <h1 className="text-[20px] font-medium">{member.name}</h1>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden justify-center mt-5">
          <button className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px] ">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
