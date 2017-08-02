import * as React from 'react'
import { Link } from 'react-router-dom'
import './style'

interface navigation {
  title: string
  active: boolean
  icon: string
  img: string
}

interface NavigationProps {
  navs: Array<navigation>
}

class Navigation extends React.Component<undefined, NavigationProps> {
  constructor (props: any) {
    super(props)
    this.state = {
      navs: [
        { title: 'profile', active: false, icon: 'file-text', img: require('../../assets/profile.jpg') },
        { title: 'asaki', active: false, icon: 'hash', img: require('../../assets/asaki.jpg') },
        { title: 'portfolio', active: false, icon: 'briefcase', img: require('../../assets/portfolio.jpg') },
        { title: 'links', active: false, icon: 'link', img: require('../../assets/links.jpg') }
      ]
    }
  }

  handleMouseEnter (nav: navigation) {
    const navs = this.state.navs.map(item => {
      item.active = item.title === nav.title
      return item
    })

    this.setState({ navs })
  }

  handleMouseLeave () {
    const navs = this.state.navs.map(item => {
      item.active = false
      return item
    })

    this.setState({ navs })
  }

  render () {
    const { navs } = this.state
    const feather: any = require('feather-icons')

    return (
      <section className="period-home" onMouseLeave={this.handleMouseLeave.bind(this)}>
        {
          this.state.navs.map((nav: navigation) => {
            const style = {
              backgroundImage: `url(${nav.img})`
            }
            return (
              <div
                className="period-home__block"
                onMouseEnter={this.handleMouseEnter.bind(this, nav)}
                key={nav.title}
              >
                <Link to={nav.title}>
                  <div className={`period-home__bg ${nav.active ? 'is-active' : ''}`} style={style}></div>
                  <div className="period-home__item">
                    <div className={`period-home__item__title ${nav.active ? 'is-active' : ''}`}>
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          dangerouslySetInnerHTML={{__html: feather.icons[nav.icon]}}
                        />
                      </i>
                      <h2>{nav.title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </section>
    )
  }
}

export default Navigation
