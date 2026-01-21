import chefClaudeLogo from '../image/chef-claude-icon.png'

export default function Header() {
    return(
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude Logo" />
            <span>Chef Claude</span>
        </header>
    )
}
