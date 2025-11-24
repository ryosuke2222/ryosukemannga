import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import './Pricing.css';

const pricingData = [
    { category: '民泊開業コンサル基本プラン', content: '立ち上げまでの各種サポート\n官庁申請アドバイス・備品購入アドバイス\nAirbnb登録アドバイス\nマーケティングアドバイス\n民泊運営アドバイス など', price: '¥150,000' },
    { category: 'Airbnb登録サポート ★お得', content: 'airbnbリスティング作成代行(集客・利益拡大を最大化するサイト作り)', price: '¥40,000' },
    { category: 'お部屋コーディネート\n(40㎡までの基本料金)', content: 'コーディネートイメージプラン (現場打合2回)', price: '¥120,000' },
    { category: '', content: 'インテリアディスプレイ・セットアップ (購入費用別)', price: '¥120,000' },
    { category: '必要物品購入代行', content: '備品・消耗品購入セット (購入費用別)', price: '¥120,000' },
    { category: '掲示物・POP', content: '作成設置', price: '¥30,000' },
    { category: '各種ガイド', content: '作成設置', price: '¥30,000' },
    { category: '官庁申請代行 香川県のみ\n(物件によりお受け出来ない場合もございます。)', content: '旅館業 (簡易宿所)', price: '¥90,000' },
    { category: '', content: '水質汚濁防止法', price: '¥60,000' },
    { category: '', content: '民泊新法', price: '¥80,000' },
    { category: '', content: '消防申請 (丸亀市/坂出市は別途費用要) 工事は別途見積', price: '¥90,000〜' },
    { category: '写真撮影', content: '拘束時間・部屋数・カット数などで変動', price: '¥70,000〜' },
    { category: '平面図面作成費用', content: '50㎡まで基本料金', price: '¥25,000' },
    { category: '民泊物件紹介', content: '', price: '家賃3か月分\nor 購入金額の5%' },
    { category: '物件アドバイス', content: '現場同行確認 (遠方・交通費別途)', price: '¥20,000' },
    { category: '清掃代行', content: '', price: '1室4000円〜\n要相談' },
    { category: '民泊運用管理代行', content: 'ゲスト対応・レビュー作成・清掃手配', price: '売上の15-25%' },
    { category: '', content: 'メッセージ・レビュー対応のみ', price: '売上の5%〜' },
    { category: '内装工事', content: 'リフォーム業者紹介可', price: '別途見積' },
    { category: '個別相談', content: '無料相談以降の個別相談', price: '¥9,000/時間' },
];

const Pricing = () => {
    return (
        <Section id="pricing" className="pricing">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">民泊立ち上げ・運営代行サポート価格表</h2>
                    <p className="section-subtitle">お客様のニーズに合わせたプランをご用意しております。（税抜き価格）</p>
                </div>

                <div className="pricing__table-wrapper">
                    <table className="pricing__table">
                        <thead>
                            <tr>
                                <th>項目</th>
                                <th>内容</th>
                                <th>価格</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((row, index) => (
                                <tr key={index}>
                                    <td className="pricing__category">{row.category}</td>
                                    <td className="pricing__content">{row.content}</td>
                                    <td className="pricing__price-cell">{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pricing__notes">
                    <p>※その他交通費など実費必要なものは別途</p>
                    <p>※物件内容や繁忙具合によりお受けできない場合もございます。</p>
                    <p>※開業後に運営行依頼の方のみお受けしております。</p>
                </div>

                <div className="pricing__cta">
                    <Button variant="primary" size="large" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        まずは無料相談
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

export default Pricing;
