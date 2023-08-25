using Personal.Todo.Domains.Exception.Base;
using System.Runtime.Serialization;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class DatabaseUpdateException : System.Exception, IException
{
    // Define constructors for custom exceptions.
    public DatabaseUpdateException()
    {
    }

    public DatabaseUpdateException(string message)
        : base(message)
    {
    }

    public DatabaseUpdateException(string message, System.Exception inner)
        : base(message, inner)
    {
    }

    // Make the default constructor protected.
    // This prevents other classes from creating a default constructor.
    protected DatabaseUpdateException(SerializationInfo info,
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