import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width-device-width, inicial-scale=1" />
            <meta name="keywords" content={description} />
            <meta charSet="utf-8" />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WedDev Clunc News',
    keywords: 'web development, programming',
    description: 'Get the latest news in the Web Dev'
}

export default Meta