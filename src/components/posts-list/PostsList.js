import React, { useState } from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import memoize from "memoize-one";
import PostCard from '../post-card/PostCard';

 //https://www.developintelligence.com/blog/2018/11/airnyt-react-virtualized-material-ui-cards-for-fast-lists/
 //https://github.com/kpennell/nytairbnbbucketlist/commit/101a32bb0555f3a7cc29151de195882b249972e8 fonte principal
 //https://react-window.now.sh/#/examples/list/memoized-list-items

 
 const styles = theme => ({
     root: {
         padding: "0 85px",
         marginTop: 20,
         justifyContent: "flex-start"
        },
        Row: {
            display: "flex",
        },
        listaContainer: {
            marginTop: "10px",
            height: "50vh", 
        }
    });
    
    
    
    const Row = ({ data, index, style }) => {
        
        
        const { itemsPerRow, posts, classes} = data;
        
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, posts.length);
        
        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                    <PostCard key={i} post={posts[i]}/>
                );
            }
            
            return (
                <div className={styles.Row} style={style}>
            {items}
        </div>
    );
}


const PostList = ({ posts }) => {
    
    const getItemData = memoize((itemsPerRow, posts) => ({
        itemsPerRow,
        posts,
        
    })) 

    //Não consegui fazer que os cards tenham espacamento entre si, espero que vc consiga agora
    //const [CARD_SIZE, setCARD_SIZE] = useState(20)
    const CARD_SIZE = 20
    //window.onresize = function(event){}



    return (
        <div style={{ marginTop: "10px", height: '50vh' }}>
            <AutoSizer>
                {({ height, width }) => {
                    const itemsPerRow = Math.floor(width / CARD_SIZE) || 1;
                    const rowCount = Math.ceil(posts.length / itemsPerRow);
                    const itemData = getItemData(itemsPerRow, posts);

                    return (
                        <>
                            <List
                                height={height}
                                itemCount={rowCount}
                                itemData={itemData}
                                itemSize={CARD_SIZE}
                                width={width}
                            >
                                {Row}
                            </List>
                        </>
                    );
                }}
            </AutoSizer>
        </div>
    );
}
export default PostList;
