import { IRankComponent, IRankComponentProps } from '@interfaces/components/rank';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Rank: IRankComponent<IRankComponentProps> = () => {
    return (
        <div className="rank">
            <h3 className="title-box text-uppercase"><a href="/">BXH Bài Hát</a></h3>
            <Tabs
                defaultActiveKey="vn"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="vn" title="Việt Nam">
                    <ul className="list-song list-unstyled">
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">1</span>
                                <div className="info">
                                    <h5>Khóa ly biệt</h5>
                                    <p>The Masked Singer, Voi Bản Đôn</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">2</span>
                                <div className="info">
                                    <h5>Rồi Em Sẽ Gặp Một Chàng Trai Khác</h5>
                                    <p>The Masked Singer, Hippohappy</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">3</span>
                                <div className="info">
                                    <h5>Thuyền Không Bến Đợi</h5>
                                    <p>Trungg I.U, CZEE</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">4</span>
                                <div className="info">
                                    <h5>Những Lời Hứa Bỏ Quên</h5>
                                    <p>Vũ, Dear Jane</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">5</span>
                                <div className="info">
                                    <h5>Sau Lời Từ Khước (Theme Song From "MAI")</h5>
                                    <p>Phan Mạnh Quỳnh</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Tab>
                <Tab eventKey="am" title="Âu Mỹ">
                    <ul className="list-song list-unstyled">
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">1</span>
                                <div className="info">
                                    <h5>I Had Some Help</h5>
                                    <p>Post Malone, Morgan Wallen</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">2</span>
                                <div className="info">
                                    <h5>LUNCH</h5>
                                    <p>Billie Eilish</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">3</span>
                                <div className="info">
                                    <h5>Espresso</h5>
                                    <p>Sabrina Carpenter</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">4</span>
                                <div className="info">
                                    <h5>Too Sweet</h5>
                                    <p>Hozier</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">5</span>
                                <div className="info">
                                    <h5>A Bar Song (Tipsy)</h5>
                                    <p>Shaboozey</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Tab>
                <Tab eventKey="hq" title="Hàn Quốc">
                    <ul className="list-song list-unstyled">
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">1</span>
                                <div className="info">
                                    <h5>Magnetic</h5>
                                    <p>ILLIT</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">2</span>
                                <div className="info">
                                    <h5>Spring Snow (Lovely Runner OST)</h5>
                                    <p>10cm</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">3</span>
                                <div className="info">
                                    <h5>SPOT!</h5>
                                    <p>ZICO (Block B), JENNIE (BLACKPINK)</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">4</span>
                                <div className="info">
                                    <h5>Supernova</h5>
                                    <p>aespa</p>
                                </div>
                            </div>
                        </li>
                        <li className="list_chart_music">
                            <div className="info_data d-flex">
                                <span className="number">5</span>
                                <div className="info">
                                    <h5>Love You With All My Heart (Queen of Tears OST)</h5>
                                    <p>Crush</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Rank;
