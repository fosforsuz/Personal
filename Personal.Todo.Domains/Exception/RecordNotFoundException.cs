using Personal.Todo.Domains.Exception.Base;
using System.Runtime.Serialization;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class RecordNotFoundException : System.Exception, IException
{
    // Create constructors for the exception
    public RecordNotFoundException()
    {
    }

    public RecordNotFoundException(string message) : base(message)
    {
    }

    public RecordNotFoundException(string message, System.Exception inner) : base(message, inner)
    {
    }

    protected RecordNotFoundException(
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