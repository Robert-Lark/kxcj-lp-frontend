type props = {
    img: string
}

function Header(props: props) {
    const {img} = props
    return (
        <div>
            <img src={img} alt="scenic image of the illinois valley" />
        </div>
    );
}

export default Header;