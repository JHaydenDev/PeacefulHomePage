import React from 'react';
import SearchBar from './SearchBar';
import youtube from './API';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class YouTube extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div >
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default YouTube;