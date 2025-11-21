const sb = supabase.createClient(supabaseUrl, supabaseKey);

sb.channel('realtime:public:messages')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
    console.log(payload.new.text);
  })
  .subscribe();
