import {useState} from "react";
import { useAstronomicalContext } from "../../hooks/useAstronomicalContext";
import News from "./News";
import Pagination from "../../tools/Pagination";

export default function NewsPosts() {

    const {news} = useAstronomicalContext();
    const [currentPage,setCurrentPage]=useState(1);
    const[postsPerPage]=useState(4);

    const indexOfLastNewsPost = currentPage*postsPerPage;
    const indexOfFirstNewsPost= indexOfLastNewsPost-postsPerPage;
    const currentNewsPosts = news.slice(indexOfFirstNewsPost,indexOfLastNewsPost);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    }

    return (
      <>
        <News news={currentNewsPosts} />
        <Pagination postsPerPage={postsPerPage}  totalPosts={news.length} paginate={paginate}  />
      </>
  )
}
