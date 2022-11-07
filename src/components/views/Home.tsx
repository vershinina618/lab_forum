import React from "react";
import {FormEvent, useState} from "react";

type Result = {
    userId: string;
    id: string;
    title: string;
    body: string;

} | undefined;
type Result2 ={
    name: string;
    email: string;
}

const URL = "https://jsonplaceholder.typicode.com";


function Home() {
    const[id, setId] = useState("");
    const [result, setResult] = useState<Result>();
    const [result2, setResult2] = useState<Result2>();
    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch (`${URL}/posts/${id}`);
        const data = await response.json();
        console.log(data);
        setResult(data);
        const post_response = await fetch (`${URL}/users/${data.userId}`);
        const post = await post_response.json();
        console.log(post);
        setResult2(post);
    };


    return<>
        <h3>Home</h3>
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <button>send</button>
                {result && <div>
                    <b>{result?.title}</b><br/>
                    {result?.body}
                </div>}
                {result2 && <div>
                    <b>{result2?.name}</b><br/>
                    {result2?.email}
                </div>}
            </form>
        </div>
    </>;
}

export default Home;