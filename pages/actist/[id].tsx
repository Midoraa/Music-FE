// IActistDetailPage.tsx

import { GetServerSideProps } from 'next';
import { IActistDetailPageProps } from '@interfaces/pages/actistDetail'; // Import interface for props
import { images } from '@utils/constants';
import Pagination from 'react-bootstrap/Pagination';
import { useRouter } from 'next/router';
import { getArtistById } from '../../services/actistService';

const IActistDetailPage: React.FC<IActistDetailPageProps> = ({ artist }) => {
    // Use artist data to display details

    return (
        <div className="actist__detail-container">
            <div className="singer-top-cover">
                {/* Cover and basic info */}
                <div
                    className="bg-singer-cover"
                    style={{
                        backgroundImage: `url(${artist.backgroundImg})`,
                    }}
                >
                    <div className="container">
                        <div className="d-flex main-info justify-content-between">
                            <div className="left-info">
                                <img className="avatar" src={artist.avatar} alt="" />
                                <h3 className="name">{artist.name}</h3>
                            </div>
                            <div className="right-image">
                                <img src={artist.backgroundImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 actist-details__contents">
                <div>
                    <h3 className="title-box-key text-uppercase mb-2">Tiểu sử</h3>
                    <p className="mx-2">
                        {artist.description}
                    </p>
                </div>
                <div className="album">
                <h3 className="title-box-key text-uppercase mb-2">Album</h3>
                    {/*<ul className="list-unstyled row row-cols-5">*/}
                    {/*    /!* Render albums *!/*/}
                    {/*    {artist.albums.map((album) => (*/}
                    {/*        <li className="col" key={album.id}>*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="box-left-album">*/}
                    {/*                    <img src={album.imageUrl} alt="Album Cover" className="w-100 album-image" />*/}
                    {/*                    <div className="play-icon">*/}
                    {/*                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="info_album">*/}
                    {/*                    <h3 className="h3seo">*/}
                    {/*                        <a href="#" className="name_song" title={album.name}>*/}
                    {/*                            {album.name}*/}
                    {/*                        </a>*/}
                    {/*                    </h3>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </div>
                <div className="songs">
                    <h3 className="title-box-key text-uppercase">Bài hát</h3>
                    <ul className="row row-cols-2 list-unstyled listbaihat">
                        {/* Render songs */}
                        {artist.songs.map((song) => (
                            <li className="col baihat" key={song.id}>
                                <div className="baihat-chitiet">
                                    <a href="#" className="d-flex">
                                        <div className="box-left-album2">
                                            <img src={song.imageUrl} alt="Song Cover" className="w-100 album-image" />
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo">
                                                <a href="#" className="name_song" title={song.name}>
                                                    {song.name}
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="#">{artist.name}</a>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Pagination>
                        {/* Pagination UI */}
                        <Pagination.First />
                        <Pagination.Prev />
                        {/* Render pagination items */}
                        {Array.from({ length: artist.totalPages }, (_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === artist.currentPage}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query; // Get artist ID from URL parameter

    try {
        // Mock function getArtistById to fetch artist details
        const artist = await getArtistById(id as string); // Implement getArtistById function
        return {
            props: { artist },
        };
    } catch (error) {
        console.error('Error fetching artist details:', error);
        return {
            props: { artist: null }, // Handle error case
        };
    }
};

export default IActistDetailPage;
