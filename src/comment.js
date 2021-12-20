export const Comment = (props) =>
{
    return <div>
        <h4>{props.title}</h4>
        <ul>
            {
                props.comment.map((item, index) =>
                {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
}