import React from 'react'

const ParentContent = () => {
  return (
    <div className='flex' id='wrapper'>
      <div className='flex leftContainer'>
        <div>
          <div className='flex heading'>
            <h2 className='name'>AJ</h2>
            <p
              style={{
                fontSize: '1.14em',
                color: '#172B4D',
                marginBottom: '5px',
              }}
            >
              Amey Jakate
            </p>
            <p>Your space</p>
          </div>
          <ul className='flex'>
            <li>Overview</li>
            <li>Recent</li>
            <li>Starred</li>
            <li>Drafts</li>
            <li>Tasks</li>
          </ul>
        </div>
      </div>

      <div className='rightContainer'>
        <div>
          <h4
            style={{
              fontSize: '1.42em',
              fontWeight: '400',
              margin: '0 0 10px 0',
            }}
          >
            Pick up where you left off
          </h4>

          <div className='first-box'>
            <div>
              <h5 style={{ fontSize: '1.42em', fontWeight: '500' }}>
                Get out there and explore
              </h5>
              <p style={{ fontWeight: '300' }}>
                Once you visit, edit, or create pages, you'll find the most
                recent once here
              </p>
              <img
                src='https://confluence-v1.prod.atl-paas.net/master/vMVtxP6F_o.svg'
                alt=''
              />
            </div>
            <button className='btn' style={{ marginTop: '1.3rem' }}>
              Create a page
            </button>
          </div>
        </div>
        <div className='third-box'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Spaces</p>
            <button className='btn'>Create a space</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <h6 className='name'>AJ</h6>
            <p>Amey Jakate</p>
          </div>
          <button
            style={{
              textAlign: 'center',
              color: '#0052cc',
              margin: '10px auto',
              border: 'none',
              fontSize: '1rem',
            }}
            className='flex'
          >
            Show more
          </button>
          <hr style={{ color: 'grey', fontWeight: '300', margin: '20px 0' }} />

          <p>Announcements</p>
        </div>
        <div className='second-box'>
          <div className='flex header-div'>
            <p style={{ fontSize: '1.2rem' }}>Discover what's happening</p>
            <div
              className='flex'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <button className='btn' style={{ color: '#0052cc' }}>
                Following
              </button>
              <button className='btn'>Popular</button>
              <button className='btn' style={{ color: '#0052cc' }}>
                Edit feed
              </button>
            </div>
          </div>
          <div className='data flex shadow'>
            <h5 className='name'>AJ</h5>
            <div className='flex'>
              <div>
                <h5 className='discover-heading'>Account Hierarchy QA</h5>
                <span>
                  Owned by Soham Mehata . September 7, 2023 . Account Central
                </span>
              </div>
              <p>
                Standar Fields Does the account have different standard fields
                based on invidual tiers ? Will it be okay to have common
                Standard fields accross all tier..
              </p>
            </div>
          </div>
          <div className='data flex shadow'>
            <h5 className='name'>AJ</h5>
            <div>
              <div>
                {' '}
                <h5 className='discover-heading'>Account Hierarchy QA</h5>
                <span>
                  Owned by Soham Mehata . September 7, 2023 . Account Central
                </span>
              </div>
              <p>
                Standar Fields Does the account have different standard fields
                based on invidual tiers ? Will it be okay to have common
                Standard fields accross all tier..
              </p>
            </div>
          </div>
          <div className='data flex shadow'>
            <h5 className='name'>AJ</h5>
            <div>
              <div>
                {' '}
                <h5 className='discover-heading'>Account Hierarchy QA</h5>
                <span>
                  Owned by Soham Mehata . September 7, 2023 . Account Central
                </span>
              </div>
              <p>
                Standar Fields Does the account have different standard fields
                based on invidual tiers ? Will it be okay to have common
                Standard fields accross all tier..
              </p>
            </div>
          </div>
          <div className='data flex shadow'>
            <h5 className='name'>AJ</h5>
            <div>
              <div>
                {' '}
                <h5 className='discover-heading'>Account Hierarchy QA</h5>
                <span>
                  Owned by Soham Mehata . September 7, 2023 . Account Central
                </span>
              </div>
              <p>
                Standar Fields Does the account have different standard fields
                based on invidual tiers ? Will it be okay to have common
                Standard fields accross all tier..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentContent
