
module DashTvlwc
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.1.1"

include("jl/tvlwc.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_tvlwc",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_tvlwc.dev.js",
    external_url = "https://unpkg.com/dash_tvlwc@0.1.1/dash_tvlwc/dash_tvlwc.dev.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_tvlwc.dev.js.map",
    external_url = "https://unpkg.com/dash_tvlwc@0.1.1/dash_tvlwc/dash_tvlwc.dev.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
