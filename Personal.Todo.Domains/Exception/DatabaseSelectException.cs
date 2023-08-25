using Personal.Todo.Domains.Exception.Base;
using System.Runtime.Serialization;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class DatabaseSelectException : System.Exception, IException
{
    // define constructors for Exception
    public DatabaseSelectException() : base()
    {
    }

    public DatabaseSelectException(string message) : base(message)
    {
    }

    public DatabaseSelectException(string message, System.Exception innerException) : base(message, innerException)
    {
    }

    // define constructors for serialization
    protected DatabaseSelectException(System.Runtime.Serialization.SerializationInfo info,
        System.Runtime.Serialization.StreamingContext context) : base(info, context)
    {
    }

    public override void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        if (info == null)
            throw new ArgumentNullException(nameof(info));

        base.GetObjectData(info, context);
    }
}