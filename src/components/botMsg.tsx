export default function BotMsg(){
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="w-16" src="/flightChat.png" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">DOT Bot</div>
          <p className="text-slate-500">
            This is an example of what a chat could look like! Blah blah blah here is
            some flight information.
          </p>
        </div>
      </div>
    );
}