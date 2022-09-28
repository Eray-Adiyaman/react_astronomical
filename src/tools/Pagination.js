
export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers=[];
  
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

    return (
    <nav>
        <ul>
            {pageNumbers.map((num)=>
               ( <li key={num}>
                    <button onClick={()=> paginate(num)} >
                        {num}
                    </button>
                </li>)
           )}
        </ul> 
    </nav>
  )
}
