using Personal.Todo.Domains.Exception.Base;
using System.Runtime.Serialization;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class DatabaseInsertException : System.Exception, IException
{
    // create constructor for exception
    public DatabaseInsertException()
    {
    }

    public DatabaseInsertException(string message) : base(message)
    {
    }

    public DatabaseInsertException(string message, System.Exception inner) : base(message, inner)
    {
    }

    protected DatabaseInsertException(SerializationInfo info,
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