using System.Runtime.Serialization;
using Personal.Todo.Domains.Exception.Base;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class ConnectionStringException : System.Exception, IException
{
    // define constructors
    public ConnectionStringException()
    {
    }

    public ConnectionStringException(string message) : base(message)
    {
    }

    public ConnectionStringException(string message, System.Exception inner) : base(message, inner)
    {
    }

    protected ConnectionStringException(SerializationInfo info,
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