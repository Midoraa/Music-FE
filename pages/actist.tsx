// pages/actist.tsx
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { IActistPageProps, IActistPage } from '@interfaces/pages/actist';
import { images } from '@utils/constants';
import Pagination from 'react-bootstrap/Pagination';
import { getAllActist } from '../services/actistService';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Actist: IActistPage<IActistPageProps> = ({ artists = [], totalPages = 1, currentPage = 1 }) => {
    const router = useRouter();
    const [current, setCurrent] = useState(currentPage);

    useEffect(() => {
        setCurrent(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        router.push({
            pathname: '/actist',
            query: { page },
        });
    };

    return (
        <div className="actist-container">
            <div className="container actist-contents mt-3">
                <h3 className="title-box-key text-uppercase mb-2">Nghệ sĩ</h3>
                <div className="row row-cols-5 list-actist mb-3">
                    {artists.map((artist) => (
                        <div className="col p-0 actist-item" key={artist._id}>
                            <Link href={`/actist/${artist._id}`}>
                                <div>
                                    <img src={artist.avatar || images.AVATAR_ACTIST} alt="Logo"
                                         className="actist-image mb-1" />
                                    <h5 className="actist-name">{artist.name}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Pagination>
                    <Pagination.First onClick={() => handlePageChange(1)} />
                    <Pagination.Prev onClick={() => handlePageChange(current - 1)} disabled={current === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === current}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(current + 1)} disabled={current === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} />
                </Pagination>
            </div>
        </div>
    );
};

// Fetch data on server-side with pagination
export const getServerSideProps: GetServerSideProps = async (context) => {
    const page = context.query.page ? parseInt(context.query.page as string, 10) : 1;
    const limit = 10; // You can make this dynamic if needed

    try {
        const { artists, total, totalPages, currentPage } = await getAllActist(page, limit);
        return {
            props: { artists, totalPages, currentPage }, // Will be passed to the page component as props
        };
    } catch (error) {
        console.error('Error fetching artists:', error);
        return {
            props: { artists: [], totalPages: 1, currentPage: 1 },
        };
    }
};

export default Actist;
