"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const  Sales= () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="App  ">
      <div className="stats-container" ref={ref}>
        <div className="left-text">
          <p className="highlight">What We Achieved</p>
          <h1>We generated <span>3x</span> more sales in 2021.</h1>
          <p className="description">
            We have consulted, strategized and launched twice the number of online businesses.
            Our sales have grown 3x
          </p>
        </div>

        <div className="right-box ">
          <div className="stat-item">
            <h2>{inView && <CountUp end={9} duration={2} />}x</h2>
            <p>Sales</p>
          </div>
          <div className="stat-item">
            <h2>{inView && <CountUp end={104} duration={2} />}%</h2>
            <p>Positive Feedback</p>
          </div>
          <div className="stat-item">
            <h2>{inView && <CountUp end={18} duration={2} />}+</h2>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h2>{inView && <CountUp end={116} duration={2} />}+</h2>
            <p>Active Customers</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 80px;
          background-color: #fff;
          flex-wrap: wrap;
        }

        .left-text {
          flex: 1;
          max-width: 45%;
        }

        .highlight {
          color: #ff5722;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .left-text h1 {
          font-size: 40px;
          font-weight: bold;
          color: #2d3559;
        }

        .left-text span {
          color: #2d3559;
        }

        .description {
          color: #7a7a7a;
          margin-top: 20px;
          line-height: 1.6;
        }

        .right-box {
          flex: 1;
          max-width: 50%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.05);
          padding: 40px;
          gap: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h2 {
          font-size: 36px;
          color: #2d3559;
          font-weight: bold;
        }

        .stat-item p {
          color: #7a7a7a;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
};

export default Sales;
