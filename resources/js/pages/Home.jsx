import * as React from "react"
import { redirect, useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [accessToken, setAccessToken] = React.useState(null);
    React.useEffect(() => {
        let token = searchParams.get("token");
        if (token) {
            setAccessToken(token);
            window.location = '/';
        }
    }, []);
    // React.useEffect(() => {
    //     let urlHash = useSearchParams();
    //     console.log("asas", urlHash)
    //     if(urlHash) {
    //         if(urlHash.includes("access_token")) {
    //             let token = urlHash.slice(urlHash.indexOf("access_token")+13, urlHash.indexOf("&"));
    //             // setAccessToken(token);
    //             // handleCallback(token);
    //         } else if(urlHash.includes("error")) {
    //             alert("please authorize the app with Twitch!");
    //         }
    //     }
    //   }, []);

    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

// export default Home;