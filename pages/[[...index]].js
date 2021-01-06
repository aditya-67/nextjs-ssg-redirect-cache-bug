import React from 'react';

export const getStaticProps = async (context) => {
    if (context.params.index?.[0] === 'redirect') {
        console.log("redirecting to root");
        return {
            redirect: { destination: '/', permanent: false },
            revalidate: 1
        }
    }

    return {
        props: {},
        revalidate: 1
    }
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

const HelloWorld = () => {
    return (
        <div>
            {"Hello world!"}
        </div>
    );
};

export default HelloWorld;
