using System.Runtime.Serialization;
using Personal.Todo.Domains.Exception.Base;

namespace Personal.Todo.Domains.Exception;

[Serializable]
public class RecordAlreadyExistException : System.Exception, IException
{
    // Define Constructors for Exception class
    public RecordAlreadyExistException() : base("Record already exist")
    {
    }

    public RecordAlreadyExistException(string message) : base(message)
    {
    }

    public RecordAlreadyExistException(string message, System.Exception inner) : base(message, inner)
    {
    }

    protected RecordAlreadyExistException(
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