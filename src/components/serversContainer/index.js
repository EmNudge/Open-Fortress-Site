import React from "react"
import './index.scss'
import ServerBanner from './serverBanner'

const ServersContainer = ({ servers, images }) => {
    const getServers = () => {
        if (!servers.length) {
            return (
                <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
                    <h2 style={{ fontWeight: 100 }}>No servers matched your filter.</h2>
                </div>
            )
        }

        return servers.map(server => (
            <ServerBanner
                key={`${server.ip}:${server.port}`}
                {...server}
                fluid={images.get(server.map)}
            />
        ))
    }

    return (
        <div className="servers-container">
            {getServers()}
        </div>
    )
}

export default ServersContainer;