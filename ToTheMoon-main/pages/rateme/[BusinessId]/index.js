import Head from "next/head";
import { useRouter } from "next/router";
import businessData from "@/data/businessData";
import Index from "../../../components/rateMe/Index";

export default function Home() {
  const router = useRouter();
  const { BusinessId } = router.query;
  const getDataById = (BusinessId) => {
    // console.log("businessData: " + businessData);
    // console.log("BusinessId:" + BusinessId);
    if (BusinessId != undefined) {
      var data = businessData.filter((item) => item.id === BusinessId)[0];
      if (data == undefined) {
        return false;
      }
      return data;
    }
  };
  const retrievedData = getDataById(BusinessId);
  return (
    <>
      <Head>
        <title>{retrievedData?.name}</title>
        {/* <meta property="og:image" content={"Url"} /> */}

        <meta
          name={retrievedData?.name}
          content={`Rate ${retrievedData?.name}!`}
        />
        <meta property="og:image" content={retrievedData?.logoUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Index businessData={retrievedData} />
      </main>
    </>
  );
}
