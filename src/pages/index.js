import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql} from "gatsby";

export default () => (
    <StaticQuery
    query={graphql`{
	imageSharp {
	  fluid{...GatsbyImageSharpFluid_tracedSVG}
	}
}`}
    render={data => (

        <div>
            <h1>Hail Satan</h1>
        <Image
        fluid={data.imageSharp.fluid}
        />
        </div>
    )}
    />
)