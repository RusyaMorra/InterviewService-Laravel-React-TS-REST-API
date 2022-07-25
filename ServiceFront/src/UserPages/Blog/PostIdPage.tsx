import React,{useEffect, useState}  from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostsLoading , error, setIsLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })


    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {

        setIsLoading(true)
        setTimeout(() => {
            fetchPostById(params.id)
            fetchComments(params.id)
            setIsLoading(false)
        }, 2000);

    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isPostsLoading
                ? <Loader isPostLoading= {isPostsLoading} />
                :  <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
             {isComLoading
                ? <Loader isPostLoading= {isPostsLoading}/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }


        </div>
    );
};

export default PostIdPage;
