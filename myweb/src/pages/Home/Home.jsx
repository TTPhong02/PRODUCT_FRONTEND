import React from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderBar from "../../components/SlideBar/index";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Product from "../../components/Product";

const Home = () => {
  const listCategory = [
    {
      id: 1,
      icon: "faThumbsUp",
      text: "Yêu thích",
    },
    {
      id: 2,
      icon: "faThumbsUp",
      text: "Boots",
    },
    {
      id: 3,
      icon: "faThumbsUp",
      text: "Cao gót",
    },
    {
      id: 4,
      icon: "faThumbsUp",
      text: "Giày da",
    },
    {
      id: 5,
      icon: "faThumbsUp",
      text: "Giày thể thao",
    },
    {
      id: 6,
      icon: "faThumbsUp",
      text: "Sneaker",
    },
    {
      id: 7,
      icon: "faThumbsUp",
      text: "Giày bệt",
    },
  ];

  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 2,
      src: "https://www.mpe.com.vn/Data/Sites/1/News/105/150223eye330swacker1jpgcroporiginal-original-1507629292709.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 3,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 4,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },
  ];

  const listNews = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.pngg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 2,
      src: "https://vcdn1-dulich.vnecdn.net/2020/11/12/Trang-An-4-1605172551.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4ULwimiHp4CYfeY21RKxCQ",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 3,
      src: "https://btnmt.1cdn.vn/2021/08/26/a1-1-.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 4,
      src: "https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2022/zsgkqzektazs/2022_01_18/du-lich-trang-an-ninh-binh-4257.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 5,
      src: "https://cungphuot.info/wp-content/uploads/2016/07/kinh-nghiem-du-lich-trang-an.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 6,
      src: "https://skycentral.vn/wp-content/uploads/2021/05/vai-tro-cua-thien-nhien-1.png",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
  ];

  const lengthNew = listNews.length;

  const brandsFamous = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 2,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 3,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 4,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 5,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 6,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
  ];

  return (
    <div className="container">
      <SliderBar />
      {/* category */}
      <div className="category grid grid-cols-7">
        {listCategory.map((item, index) => (
          <div key={index} className="category-item col-span-1">
            <FontAwesomeIcon className="icon-shoes" icon={faThumbsUp} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* products hot */}
      <div className="container-content">
        <h1 className="title-content"># Sản phẩm bán chạy</h1>
        <p className="desc-title">Top những sản phẩm được mưa nhiều nhất</p>
        <div className="products-list grid grid-cols-5">
          {productsHot.map((item) => (
            <Product
              key={item.id.toString()}
              src={item.src}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>

      <div className="sale-adv">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/281863329_739565270796034_5353000391321656806_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6s71hmugqc4AX9GvV7q&_nc_ht=scontent.fhan2-4.fna&oh=03_AVLtjBundkhr8AsCnignPEfxM5LiPyEHkY0auTwD763wRg&oe=62B73259"
          alt=""
        />
      </div>

      {/* products new */}
      <div className="container-content">
        <h1 className="title-content"># Sản phẩm mới nhất</h1>
        <p className="desc-title">
          Những sản phẩm mới được shop mang về phục vụ các tín đồ
        </p>
        <div className="products-list grid grid-cols-5">
          {productsHot.map((item) => (
            <Product
              key={item.id.toString()}
              src={item.src}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>

      {/* news */}
      <div className="container-content">
        <h1 className="title-content"># Tin tức mới</h1>
        <p className="desc-title">
          Nơi cập nhật những xu hướng thời trang mới nhất hiện nay
        </p>
        <div className="news-list grid grid-cols-2 gap-20">
          <>
            <div className="col-span-1">
              <div className="item-news">
                <img src={listNews[lengthNew - 1].src} alt="" />
                <p className="title-news">{listNews[lengthNew - 1].title}</p>
                <p className="date-post">{listNews[lengthNew - 1].date}</p>
                <p className="content-news">
                  {listNews[lengthNew - 1].content}
                </p>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-2 grid-rows-2 gap-20">
              {listNews.map((item, index) => {
                if (index >= lengthNew - 5 && index < lengthNew - 1) {
                  return (
                    <div
                      key={index}
                      className="item-news col-span-1 row-span-1"
                    >
                      <img className="img-news" src={item.src} alt="" />
                      <p className="title-news">{item.title}</p>
                      <p className="date-post">{item.date}</p>
                    </div>
                  );
                }
              })}
            </div>
          </>
        </div>
      </div>

      {/* brand */}
      <div className="container-content">
        <h1 className="title-content"># Những thương hiệu nổi tiếng</h1>
        <p className="desc-title">
          Chúng tôi luôn đem đến cho khách hàng những thương hiệu hàng đầu thế
          giới
        </p>
        <div className="brand grid grid-cols-6 mt-20">
          {brandsFamous.map((item) => (
            <div className="item-brand">
              <img
                key={item.id}
                className="img-brand col-span-1"
                src={item.src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
