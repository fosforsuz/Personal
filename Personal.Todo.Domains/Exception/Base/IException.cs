using System.Runtime.Serialization;

namespace Personal.Todo.Domains.Exception.Base;

public interface ICustomException
{

}

public interface IException : ISerializable, ICustomException
{
    
}