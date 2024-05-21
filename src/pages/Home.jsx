import datas from "../../database.json";
import add from "../../public/images/add.png";
import banner from "../../public/images/banner.png";
import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";

const Home = () => {

    console.log(datas);
  return (
    <Layout>
      <div className="bg-white flex flex-col gap-5 px-2">

        {/* banner add */}
        <div className="w-full h-[300px] my-3 rounded-3xl overflow-hidden bg-red-800">
          <img className="w-full h-full object-cover" src={banner} alt="" />
        </div>

        {/* add */}
        <div className="w-full">
            <img className="w-full" src={add} alt="" />
        </div>

        {/* articles */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {
                datas.data?.map(data=>(
                    <ArticleCard key={data?.id} data={data}/>
                ))
            }
        </div>


      </div>
    </Layout>
  );
};

export default Home;
