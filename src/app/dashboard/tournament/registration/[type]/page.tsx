

interface IProps {
    data: string
}
const page = (props: IProps) => {
    const data = props.data;
    return (
        <div>{data}</div>
    )
}

export default page