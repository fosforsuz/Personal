using System.Runtime.Serialization;
using Personal.Todo.Domains.Exception.Base;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class DatabaseDeleteException : System.Exception, IException
{
    // Define constructors for exception class
    public DatabaseDeleteException()
    {
    }

    public DatabaseDeleteException(string message)
        : base(message)
    {
    }

    public DatabaseDeleteException(string message, System.Exception inner)
        : base(message, inner)
    {
    }

    protected DatabaseDeleteException(
        SerializationInfo info,
        StreamingContext context) : base(info, context)
    {
    }

    public override void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        if (info == null)
            throw new ArgumentNullException(nameof(info));

        base.GetObjectData(info, context);
    }
}