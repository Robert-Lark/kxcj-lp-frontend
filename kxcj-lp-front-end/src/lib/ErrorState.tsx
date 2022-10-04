

function ErrorState(props: any) {
    const { error } = props
    console.log(error)
    return (
        <div>
                <p>Sorry we encountered an error please return to the home page</p>
                <button><a href='/'>HOME</a></button>
        </div>
    )
}

export default ErrorState