import SectionTitle from "../shared/SectionTitle";

export default function Blogs() {
  const data = [
    {
      "title": "Unlocking the Wonders of Coastal Drives",
      "author": "Emily Turner",
      "banner": "https://i.ibb.co/YdnsMdz/road-trip-983575.jpg",
      "date": "2023-03-15",
      "description": "Embark on a breathtaking journey along the scenic coastal routes. In this blog, Emily Turner shares her experiences, hidden gems, and tips for a memorable coastal road trip. Get ready to explore the beauty that awaits you on the open road!"
    },
    {
      "title": "The Art of Spontaneous Road Trips",
      "author": "Chris Johnson",
      "banner": "https://i.ibb.co/gVfw7xC/Untitled-design-22.png",
      "date": "2023-04-20",
      "description": "Discover the joy of unplanned adventures with Chris Johnson as he takes you through the art of spontaneous road trips. From serendipitous discoveries to navigating detours, learn how to turn your next road trip into an unforgettable experience."
    },
    {
      "title": "Sustainable Travel: A Roadmap for Eco-Friendly Explorations",
      "author": "Sam Patel",
      "banner": "https://i.ibb.co/gDJ1Cdy/caption.jpg",
      "date": "2023-05-28",
      "description": "Join Sam Patel on a journey towards sustainable travel. Explore eco-friendly practices, tips for reducing your carbon footprint, and destinations that embrace responsible tourism. Learn how you can contribute to a greener and more sustainable travel experience."
    }
  ]
  ;
  return (
    <div className="container mx-auto mt-16 mb-20">
      <SectionTitle
        title={"Journey Chronicles"}
        subtitle={"Explore the Roads Less Traveled Through Captivating Stories"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-14">
        {data.map((ele, ind) => {
          return (
            <div key={ind} className="card  rounded-md bg-[#dcdde1a5] shadow-xl">
              <figure>
                <img className=" h-60 w-full object-cover" src={ele.banner} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="time mb-4 flex justify-between items-center">
                    <span>{ele.date}</span>
                    <span className="opacity-75 flex gap-2"><i className="fa-solid  text-sm fa-user-tie"></i> <span>{ele.author}</span></span>
                 </div>    
                <h2 className="card-title">{ele.title.slice(0,50)+".."}</h2>
                <p className="text-base">{ele.description.slice(0,100)+".."}</p>
                <div className="card-actions mt-5 justify-end">
                   <button className="btn bg-red-600 hover:bg-red-600 text-white rounded-none">Read more </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
