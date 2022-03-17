import {createClient} from 'contentful';

const contentful_client = createClient({
    space: 'dhw1od47ash4',
    accessToken: 'AIjaeOol76wuUQehHK1uEQRLqVvWgAo-48nUeI3ESR0',
    host: 'preview.contentful.com',
});

export const get_news_posts = async () => {
    const entries = await contentful_client.getEntries({
        content_type: 'news_post',
    });

    return  entries.items.map(item => item.fields);
};

export const get_results = async () => {
    const entries = await contentful_client.getEntries({
        content_type: 'result_item',
    });

    return entries.items.map(item => item.fields);
};
