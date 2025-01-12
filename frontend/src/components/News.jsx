import React from 'react';
import Navbar from './Navbar';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Nepal to send mpox sample to WHO lab in Thailand for clade analysis',
      description:
        'In a bid to determine the clade of the mpox (monkeypox) virus, the Ministry of Health and Population is preparing to send specimens from infected persons to the World Health Organisation’s collaborating centre in Thailand',
      link: '#',
    },
    {
      id: 2,
      title: 'Anti-cancer HPV vaccine doses made available in Nepal',
      description:
        'Ministry of Health and Population has imported Human Papilloma Virus (HPV)vaccines administered against cervical cancer with the assistance of Global Alliance for Vaccine and Immunization (GAVI). Director of the Supply Management Division of the Department of Health Services, Dr Pawan Jung Rayamajhi said 460,940 doses of the vaccine have been received. The vaccines have now been kept in storage room at Teku and will be sent to the provinces gradually, he added.',
      link: '#',
    },
    {
      id: 3,
      title: 'Health Tips: Stay Fit This Summer',
      description:
        'Ministry of Health and Population has imported Human Papilloma Virus (HPV)vaccines administered against cervical cancer',
      link: '#',
    },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white pt- flex items-center justify-center">
      <div className="news-section p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-card bg-white p-4 shadow rounded">
              <h3 className="text-xl text-black font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-500 hover:underline font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
